export default class DB {
    constructor() {
        this._rows = [];
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            if(data.id) {
                if(typeof data.id !== 'number') {
                    this.async(reject,'ID can be only number!');
                    return null; // stop function
                } else if(this._rows.some(item => item.id === data.id)) {
                    this.async(reject, 'ID can\'t be duplicated!');
                    return null; // stop function
                }
            }

            this.async(() => {
                if(!data.id) {
                    data.id = this._rows.reduce((acc, item) => {
                        return acc <= item.id ? item.id + 1 : acc;
                    }, 1);
                }

                this._rows.push(data);
                resolve(data)
            }); 
        });
    }

    select(id) {
        return new Promise((resolve, reject) => {
            this.async(() => {
                const [row = null] = this._rows.filter(item => item.id === id);
                if(row) {
                    resolve(row);
                } else {
                    reject('ID not found');
                }
            });
        });
    }

    async remove(id) {
        const item = this._rows.find(row => row.id === id)

        if (!item) {
            throw new Error(`Item with id ${id} not found`)
        }

        this._rows = this._rows.filter(row => row.id !== id)
        return this.async()
    }

    update(data) {
        return new Promise((resolve, reject) => {
            if (!data.id) {
                reject(new Error('ID must be set'))
                return
            }

            const index = this._rows.findIndex(row => row.id === data.id)
            if (index === -1) {
                reject(new Error('Item not found'))
                return
            }

            this._rows[index] = { ...this._rows[index], ...data }
            
            this.async(() => {
                resolve()
            })
        })



        // return new Promise((resolve, reject) => {
        //     if(!data.id) {
        //         this.async(reject, 'ID have to be set!');
        //     } else {
        //         this.async(() => {
        //             let updated = null;
        //             this._rows = this._rows.map(item => {
        //                 if(item.id === data.id) {
        //                     updated = data
        //                     return updated;
        //                 }
            
        //                 return item;
        //             });

        //             if(updated) {
        //                 resolve(updated);
        //             } else {
        //                 reject('ID not found!');   
        //             }
        //         });
        //     }
        // });
    }

    

    truncate() {
        return new Promise(resolve => {
            this.async(() => {
                this._rows = [];
                resolve(true);
            });
            
        })
    }

    getRows() {
        return new Promise(resolve => {
            this.async(() => {
                resolve(this._rows);
            });
        })
    }


    async(callback) {
        if (typeof callback !== 'function') {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, Math.random() * 100)
            })
        }

        setTimeout(() => {
            callback()
        }, Math.random() * 100)
    }

    // async(callback, ...params) {
    //     setTimeout(() => {
    //         callback(...params);
    //     }, Math.random() * 100);
    // }
}