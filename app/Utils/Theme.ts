type HexColorString = string & {_isHex: true}

function assertIsHexColorString(value: string): HexColorString {
    if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)) {
        throw new Error(`${value} is not a valid hex color string.`);
    }
    return value as HexColorString;
}

interface IColors {
    background: HexColorString,
    primary: HexColorString,
    secondary:HexColorString
}
export const colors: IColors = {
    background: assertIsHexColorString('#0B0117'),
    primary: assertIsHexColorString('#8451C2'),
    secondary: assertIsHexColorString('#E1D2F2')
}