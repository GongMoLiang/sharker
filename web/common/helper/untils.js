/**
 * 通用工具函数库
 *
 */
import xlsx from 'xlsx'


/**
 *
 * @param { String } fileName 文件名
 * @param { ArrayBuffer } content 数据
 */
export function downloadFile(fileName, content) {
    const aLink = document.createElement('a')
    const blob = new Blob([content])
    aLink.download = fileName
    aLink.href = URL.createObjectURL(blob)
    aLink.click()
}

export function downloadExcel(contextData, sheetName, fileName) {
    const ws = xlsx.utils.json_to_sheet(contextData)
    const wb = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb, ws, sheetName)
    xlsx.writeFile(wb, fileName, { bookType: 'xlsx' })
}

