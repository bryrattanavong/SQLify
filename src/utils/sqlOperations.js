const SQLOperations = {
    getTableNamesAndRows: function(dbFile){
        let db, tables;
        try {
            db = new window.SQL.Database(new Uint8Array(dbFile));
            tables = db.prepare("SELECT * FROM sqlite_master WHERE type='table' ORDER BY name");
        } catch (error) {
            alert(error);
            return;
        }
        
        let firstTableName = null;
        let dbObject = {};

        while (tables.step()) {
            let rowObj = tables.getAsObject();
            let name = rowObj.name;

            if (firstTableName === null) {
                firstTableName = name;
            }
            let rowCount = this.getNumOfRows(db, name);
            dbObject[name] = rowCount;
        }

        return(dbObject);
    },
    getNumOfRows: function(dbFile, name){
        let sel = dbFile.prepare("SELECT COUNT(*) AS count FROM '" + name + "'");
        if (sel.step()) {
            return sel.getAsObject().count;
        } else {
            return -1;
        }
    },
    getDataFromTable: function(dbFile, table){
        let db = new window.SQL.Database(new Uint8Array(dbFile));
        let result = [];
        console.log(dbFile);
        let sel = db.prepare("SELECT * from '" + table + "'");
        while (sel.step()) {
            result.push(sel.getAsObject());
        }
        return result;
    }
}

export default SQLOperations;