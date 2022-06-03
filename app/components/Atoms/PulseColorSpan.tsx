export default function PulseColorSpan({ text, variation }: { text: string, variation: 'first' | 'second' }) {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    interface Variations {
        first: string,
        second: string
    }

    const variations: Variations = {
        first: "before:content-['Inversion'] before:animate-text before:from-green-600 before:to-green-900",
        second: "before:content-['Mexicana'] before:animate-second before-delay-200 before:from-red-400 before:to-red-700",
    }

    return (
        <p className={classNames(variations[variation], `text-white block relative leading-[1]
        before:bg-gradient-to-r
        before:text-transparent before:text-8xl before:bg-clip-text
        before:duration-[8000] before:inset-[0] before:absolute`)}>{ text }</p>
    )
}