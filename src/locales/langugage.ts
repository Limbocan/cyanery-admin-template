import ISO6391, { LanguageCode } from 'iso-639-1'

export const languagesNameList: {
  code: LanguageCode
  nativeName: string
  name: string
}[] = ISO6391.getAllCodes().map(code => ({
  code,
  nativeName: ISO6391.getNativeName(code),
  name: ISO6391.getName(code),
}))
