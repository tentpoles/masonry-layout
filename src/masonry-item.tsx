import { cn } from "./utils";

type itemValueType = {
    src: string,
}

type propsType = {
    itemValue: itemValueType
}

function MasonryItem({ itemValue }: propsType) {
    return (
        <div
            className={cn(
                'p-[6px]',
            )}
        >
          <img src={itemValue.src} className="w-[100%] h-auto" />
        </div>
    )
}

export default MasonryItem