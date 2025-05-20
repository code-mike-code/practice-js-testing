import DB from './DB';

describe('DB', () => {
    let db // zmienna dla każdego z testów

    // tworzymy bazę danych przed każdym z testów
    beforeEach(() => {
        db = new DB()
    })

    // funkcja odpowiedzialna z wstawianie danych do testów
    const testDataInsert = async(count) => {
        const testData = []
        for (let i = 0; i < count; i++) {
            const data = { name: `Test ${i}` }
            await db.insert(data)
            testData.push({ ...data, id: i + 1})
        }
        return testData
    }

    describe('insert()', () => {
        it ('should insert data correctly', async () => {
            const testData = { name: 'Test' }
            await db.insert(testData)
            const rows = await db.getRows()

            expect(rows[0]).toEqual( { ...testData, id: 1} )
        })

        it ('should increment ID', async () => {
            await testDataInsert(2)
            const rows = await db.getRows()

            expect(rows[0].id).toBe(1)
            expect(rows[1].id).toBe(2)
        })
    })

    describe('remove()', () => {
        it ('should remove data by ID', async () => {
            await testDataInsert(2)
            await db.remove(1)
            const rows = await db.getRows()

            expect(rows.length).toBe(1)
            expect(rows[0].id).toBe(2)
        })

        it ('should reject when removing not existing ID item', async () => {
            await expect(db.remove(999)).rejects.toThrow()
        })
    })

    describe('update()', () => {
        it ('should update existing data', async () => {
            await testDataInsert(1)
            await db.update( {id: 1, name: 'Updated data'} )
            const rows = await db.getRows()

            expect(rows[0]).toEqual( {id: 1, name: 'Updated data'} )
        })

        it ('should reject when updating data without ID', async () => {
            await expect(db.update( {name: 'ID test'} )).rejects.toThrow()
        })
    })

    describe('getRows()', () => {
        it ('should return all rows', async () => {
            const rowsTestData = await testDataInsert(2)
            const rows = await db.getRows()

            expect(rows.length).toBe(2)
            expect(rows).toEqual(rowsTestData)
        })
        
        it ('should return empty array for empty database', async () => {
            const rows = await db.getRows()
            expect(rows).toEqual([])
        })
    })
})