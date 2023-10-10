/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import MasonryItem from "./masonry-item";
import { cn } from "./utils";

type propsType = {
    itemList: any[],
    columnLengthMd: number,
    columnLengthSm: number,
    columnLengthXs: number,
}

function MasonryLayout({
    itemList,
    columnLengthMd = 3,
    columnLengthSm = 2,
    columnLengthXs = 1,
}: propsType) {
    const columnGroup: any = { md: columnLengthMd, sm: columnLengthSm, xs: columnLengthXs };

    const itemListObject: any = {
        md: {},
        sm: {},
        xs: {},
    };

    Object.keys(columnGroup).forEach((keyColumn) => {
        for (let i = 0; i < columnGroup[keyColumn]; i++) {
            itemListObject[keyColumn][i] = [];
        }
    });

    Object.keys(columnGroup).forEach((keyColumn) => {
        itemList
            ?.reduce((acc: any, _: any, i: number) => (i % columnGroup[keyColumn]) ? acc : [...acc, itemList.slice(i, i + columnGroup[keyColumn])], [])
            ?.forEach((parentLevel: any) => {
                parentLevel.forEach((childLevel: any, childLevelIdx: number) => {
                    itemListObject[keyColumn][childLevelIdx] = [...itemListObject[keyColumn][childLevelIdx], childLevel];
                })
            });
    });

    return (
        <Fragment>
            {
                Object.keys(itemListObject).map((parentKey, parentKeyIdx) => {
                    return (
                        <div
                            key={parentKeyIdx}
                            className={cn(
                                'w-[100%] flex-wrap max-w-[900px] m-[0_auto] p-[42px_6px]',
                                parentKey === 'md' && 'hidden md:flex',
                                parentKey === 'sm' && 'hidden sm:flex',
                                parentKey === 'xs' && 'hidden xs:flex',
                            )}
                        >
                            {
                                Object.keys(itemListObject[parentKey]).map((key, keyIdx) => {
                                    let columnLengthValue = columnLengthMd;
                                    if (parentKey === 'sm') columnLengthValue = columnLengthSm;
                                    if (parentKey === 'xs') columnLengthValue = columnLengthXs;
                                    return (
                                        <div
                                            key={keyIdx}
                                            style={{
                                                flex: `0 0 ${100/columnLengthValue}%`,
                                            }}
                                        >
                                            {
                                                itemListObject[parentKey][key]?.map((value: any, idx: number) => {
                                                    return (
                                                        <MasonryItem
                                                            key={idx}
                                                            itemValue={value}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Fragment>
    );
}

export default MasonryLayout