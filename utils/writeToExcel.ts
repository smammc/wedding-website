// utils/writeToExcel.ts
import { getGraphClient } from './graphClient'

export async function writeRSVPToExcel(nome: string, presenca: string, restricoes: string) {
  const client = await getGraphClient()
  // IDs do ficheiro e da folha
  const workbookId = 'ID_DO_FICHEIRO'
  const worksheet = 'Sheet1'
  await client
    .api(`/me/drive/items/${workbookId}/workbook/worksheets('${worksheet}')/range(address='A1')`)
    .post({
      values: [[nome, presenca, restricoes]],
    })
}