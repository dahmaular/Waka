import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("app.db");

export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS cached_routes (id INTEGER PRIMARY KEY AUTOINCREMENT, route TEXT);`
    );
  });
};

export const saveRoute = (route: string) => {
  db.transaction((tx) => {
    tx.executeSql(`INSERT INTO cached_routes (route) VALUES (?);`, [route]);
  });
};

export const getRoutes = (callback: (routes: string[]) => void) => {
  db.transaction((tx) => {
    tx.executeSql(`SELECT route FROM cached_routes;`, [], (_, { rows }) => {
      const routes = rows._array.map((row) => row.route);
      callback(routes);
    });
  });
};
