'use strict'

function Cell(rowIndex, colIndex, rowElement, cellElement) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.rowElement = rowElement
    this.cellElement = cellElement
    this.addCell(rowIndex, colIndex, rowElement)

}
Cell.prototype = {

    addCell: function (rowIndex, colIndex, rowElement) {

        this.cellElement = document.createElement("div")
        this.cellElement.classList.add("cell")
        this.rowElement.appendChild(this.cellElement)
        this.cellElement.dataset.colIndex = colIndex
        this.cellElement.dataset.rowIndex = rowIndex
        this.cellElement.textContent = this.category
    },
    constructor: Cell,
}