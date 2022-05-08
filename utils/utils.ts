// eslint-disable-next-line import/prefer-default-export
export function classNames(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}
