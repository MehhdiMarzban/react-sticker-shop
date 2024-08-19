import { NumberFormatBase, useNumericFormat } from "react-number-format";

const persianNumeral = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const PersianNumber = (props: any) => {
    const { format, removeFormatting, isCharacterSame, ...rest } = useNumericFormat(props);
    const _format: any = (val: any) => {
        if (val && format) {
            const _val = format(val);
            return _val.replace(/\d/g, ($1) => persianNumeral[Number($1)]);
        }
    };

    const _removeFormatting = (val: any): any => {
        const _val = val.replace(new RegExp(persianNumeral.join("|"), "g"), ($1: any) =>
            persianNumeral.indexOf($1)
        );
        if (removeFormatting) return removeFormatting(_val);
    };

    const _isCharacterSame = (compareMeta: any) => {
        if (isCharacterSame) {
            const isCharSame: any = isCharacterSame(compareMeta);
            const { formattedValue, currentValue, formattedValueIndex, currentValueIndex } =
                compareMeta;
            const curChar = currentValue[currentValueIndex];
            const newChar = formattedValue[formattedValueIndex];
            const curPersianChar = persianNumeral[Number(curChar)] ?? curChar;
            const newPersianChar = persianNumeral[Number(newChar)] ?? newChar;

            return isCharSame || curPersianChar || newPersianChar;
        }
    };

    return (
        <NumberFormatBase
            format={_format}
            removeFormatting={_removeFormatting}
            isCharacterSame={_isCharacterSame}
            {...rest}
            displayType="text"
        />
    );
};

export default PersianNumber;
