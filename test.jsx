import React from 'react';
import { createRoot } from 'react-dom/client';

import "./node_modules/@patternfly/patternfly/patternfly-base.css";

import {
    DataList,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
    DataListCell,
    DataListCheck,
} from '@patternfly/react-core/dist/esm/components/DataList';

export const DataListCheckboxes = () => {
    const [isOpen1, setIsOpen1] = React.useState(false);

    const onToggle1 = isOpen1 => {
        setIsOpen1(isOpen1);
    };

    const onSelect1 = () => {
        setIsOpen1(!isOpen1);
    };

    return (
        <DataList isCompact aria-label="Checkbox and action data list example">
            <DataListItem aria-labelledby="check-action-item1">
                <DataListItemRow>
                    <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
                    <DataListItemCells
                        dataListCells={[
                        <DataListCell key="primary content">
                            <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod.
                        </DataListCell>,
                        <DataListCell key="secondary content 1">
                            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                        </DataListCell>,
                        <DataListCell key="secondary content 2">
                            <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                        </DataListCell>,
                        <DataListCell key="more content 1">
                            <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                        </DataListCell>,
                        <DataListCell key="more content 2">
                            <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                        </DataListCell>
                        ]}
                    />
                </DataListItemRow>
            </DataListItem>
        </DataList>
    );
};


document.addEventListener("DOMContentLoaded", function () {
    console.info("DOMContentLoaded event");
    const root = createRoot(document.getElementById('app'));
    root.render(<DataListCheckboxes />);
});
