export interface IConfig {
  comment?: RegExp,
  section?: RegExp,
  hierarchy?: string,
  delimeter?: RegExp,
  lowercase?: boolean,
  override?: boolean,
  escaped?: boolean,
  quoted?: boolean,
  quotes?: string,
  whitespace?: string
}
