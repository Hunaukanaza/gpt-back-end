import mysql from 'mysql2'
import mysqlConfig from '../config/mysql.config'

const pool = mysql.createPool(mysqlConfig)

const db = pool.promise()

export async function querySingle(sql: string, values: string[] = []) {
  try {
    const [row] = await db.query(sql, values)
    return row[0]
  }
  catch (e) {
    return e.message
  }
}

export async function queryList(sql: string, values: string[] = []) {
  try {
    const [row] = await db.query(sql, values)
    return row
  }
  catch (e) {
    return e.message
  }
}

export async function cud(sql: string, values: string[] = []) {
  try {
    const [row] = await db.execute(sql, values)
    return row
  }
  catch (e) {
    return e.message
  }
  finally { /* empty */ }
}

// export function queryList(sql: string, values: string[] = []): any {
//   let res: any
//   db.query(sql, values, (err, result) => {
//     res = err === undefined ? err : result
//   })
//   console.log(res)
//   return res
// }

// export function crd(sql: string, values: string[]) {
//   let err: mysql.MysqlError = null
//   db.query(sql, values, (error) => {
//     if (error) {
//       err = error
//     }
//   })
//   return err
// }
//
