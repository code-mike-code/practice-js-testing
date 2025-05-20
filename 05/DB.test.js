import DB from './DB';

describe('DB', () => {

    describe('insert()', () => {
        it ('should insert data correctly', async () => {
            const db = new DB()
            const testData = { name: 'Test' }

            await db.insert(testData)
            const rows = await db.getRows()

            expect(rows[0]).toEqual( { ...testData, id: 1} )
        })

        it ('should increment ID', async () => {
            const db = new DB()
            await db.insert( {name: 'First test'} )
            await db.insert( {name: 'Second test'} )

            const rows = await db.getRows()

            expect(rows[0].id).toBe(1)
            expect(rows[1].id).toBe(2)
        })
    })

    describe('remove()', () => {
        it ('should remove data by ID', async () => {
            const db = new DB()
            await db.insert( {name: 'First test'} )
            await db.insert( {name: 'Second test'} )

            await db.remove(1)
            const rows = await db.getRows()

            expect(rows.length).toBe(1)
            expect(rows[0].id).toBe(2)
        })

        it ('should reject when removing not existing ID item', async () => {
            const db = new DB()
            await expect(db.remove(999)).rejects.toThrow()
        })
    })

    describe('update()', () => {
        it ('should update existing data', async () => {
            const db = new DB()
            await db.insert( {name: 'Original data'} )
            await db.update( {id: 1, name: 'Updated data'} )

            const rows = await db.getRows()

            expect(rows[0]).toEqual( {id: 1, name: 'Updated data'} )
        })

        it ('should reject when updating data without ID', async () => {
            const db = new DB()
            await expect(db.update( {name: 'ID test'} )).rejects.toThrow()
        })
    })

    describe('getRows()', () => {
        it ('should return all rows', async () => {
            const db = new DB()
            await db.insert( {name: 'First test'} )
            await db.insert( {name: 'Second test'} )

            const rows = await db.getRows()

            expect(rows.length).toBe(2)
            expect(rows).toEqual([
                {id: 1, name: 'First test'},
                {id: 2, name: 'Second test'},
            ])
        })
    })

       







})