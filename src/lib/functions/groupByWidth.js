import { getStringWidth } from "./getStringWidth";

export function groupByWidth(data, numItems, frontLoad, blockWidth, showLastGroup, correction, log) {
    function frontLoadGroupItems(items, frontLoad) {
        let groups = [];
        for (let i = 0; i < frontLoad; i += 2) {
            if (i + 1 < frontLoad) {
                groups.push([items[i], items[i + 1]]);
            } else {
                groups.push([items[i]]);
            }
        }
        items = items.splice(0, frontLoad);
        return groups;
    }
    function sortRemainingGroupItems(items, groups, blockWidth) {
        function sortGroupBySpaceRemaining(groups, blockWidth) {
            let spaceRemaining = groups.map((group, index) => {
                let totalWidth = group.reduce((acc, item) => acc + item.width, 0);
                return { index, spaceRemaining: blockWidth - totalWidth };
            });
            spaceRemaining = spaceRemaining.sort((a, b) => a.groupSpace - b.groupSpace);

            return spaceRemaining;
        }

        let groupSpace = sortGroupBySpaceRemaining(groups, blockWidth);
        items = items.sort((a, b) => a.width - b.width);

        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < groupSpace.length; j++) {
                if (items[i].width < groupSpace[j].spaceRemaining) {
                    groups[groupSpace[j].index].push(items[i]);
                    items.splice(i, 1);
                    groupSpace = sortGroupBySpaceRemaining(groups, blockWidth);
                }
            }
        }

        if (items.length && showLastGroup) {
            groups.push(items);
            items = [];
        }

        return groups;
    }

    let items = data;

    if (numItems > items.length) {
        numItems = items.length;
    }
    items = items
        .filter((item, index) => index < numItems)
        .map((item) => {
            return { ...item, width: getStringWidth(item.name) };
        });
    let groups = frontLoadGroupItems(items, frontLoad);
    sortRemainingGroupItems(items, groups, blockWidth);

    if (log) {
        console.log(groups);
    }
    return groups;
}