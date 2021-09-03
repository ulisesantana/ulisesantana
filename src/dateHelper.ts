export class DateHelper {
  private static MonthDictionary = {
    '01': 'Enero',
    '02': 'Febrero',
    '03': 'Marzo',
    '04': 'Abril',
    '05': 'Mayo',
    '06': 'Junio',
    '07': 'Julio',
    '08': 'Agosto',
    '09': 'Septiembre',
    '10': 'Octubre',
    '11': 'Noviembre',
    '12': 'Diciembre',
  }

  /**
   * Parse from date to human readable date.
   * The format for 2021-05-25 will be "25 de Mayo de 2021"
   * @param {Date} date
   * @return {string}
   */
  static toHuman (date: Date | string): string {
    if (typeof date === 'string') {
      return DateHelper.toHuman(new Date(date))
    }
    if (DateHelper.isValidDate(date)) {
      const [dateString] = date.toISOString().split('T')
      const [year, month, day] = dateString.split('-')
      return `${DateHelper.removeInitialZero(day)} de ${DateHelper.getMonth(month)} de ${year}`
    }
    return 'Sin fecha válida'
  }

  static getDate(inputDate: string) {
    const date = new Date(inputDate)
    return {
      day: DateHelper.prefixWithZero(date.getDate()),
      month: DateHelper.getMonth(DateHelper.prefixWithZero(date.getMonth() + 1)),
      year: date.getFullYear()
    }
  }

  private static prefixWithZero(day: number) {
    return day < 10 ? `0${day}` : String(day)
  }

  private static getMonth(month: string) {
    // @ts-ignore
    return DateHelper.MonthDictionary[month]
  }

  private static removeInitialZero (number: string) {
    return Number(number)
  }

  private static isValidDate (date: Date | unknown) {
    return date instanceof Date && !isNaN(date.getTime())
  }
}
