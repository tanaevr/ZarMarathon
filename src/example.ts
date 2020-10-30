/**
 * Работа с простыми типами
 * Задача: Напиши тип функции, конкатенирующей две строки
 */
type TypeFn = (first: string, second: string) => string;

const concat: TypeFn = (first, second) => {return first + second};

concat('Hello ', 'World');

/**
 * Работа с интерфейсами
 * Задача: Напиши интерфейс для описания следующих данных
 */
type TsArrayElem = number | string;

type TsObj = {
    [n: string]: number | string | TsArrayElem[]
};

interface MyHometaskInterface {
    howIDoIt: string;
    simeArray: TsArrayElem[];
    withData: TsObj[];
}

const MyHometask: MyHometaskInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

/**
 * Типизация функций, используя Generic
 * В уроке про Generics мы написали интерфейс массива MyArray...
 * Задача: Добавь типизацию для метода reduce
 */

interface MyArray<T> {
	[N: number]: T;

    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U, initialValue: U): U;
}