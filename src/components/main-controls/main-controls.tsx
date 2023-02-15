import { FC, MouseEvent, useState } from 'react';
import { BookCardMode } from '../book/book_card/book-card';
import { Button, ButtonSize, ButtonType } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { Select, SelectProps } from '../ui/select/select';

import buttonIcons from './images/button_icons.svg';
import buttonIconsActive from './images/button_icons_active.svg';
import buttonLists from './images/button_lists.svg';
import buttonListsActive from './images/button_lists_active.svg';
import { bookSelectMock } from './mock/select';

import classes from './main-controls.module.scss';

interface MainControlsProps {
    viewCardMode: BookCardMode;
    setViewCardMode: (state: BookCardMode) => void;
}
export const MainControls: FC<MainControlsProps> = ({ viewCardMode, setViewCardMode }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectData: SelectProps = bookSelectMock();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openSearchHandler = (e: MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        setIsOpen(true);
    };

    const closeSearchHandler = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const onClickHandlerGrid = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (viewCardMode === BookCardMode.list) {
            setViewCardMode(BookCardMode.grid);
        }
    };

    const onClickHandlerList = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (viewCardMode === BookCardMode.grid) {
            setViewCardMode(BookCardMode.list);
        }
    };

    return (
        <div className={classes.controls}>
            <div className={classes.controlsInputs}>
                <Input
                    type='type'
                    placeholder='Поиск книги или автора…'
                    closeSearchHandler={closeSearchHandler}
                    openSearchHandler={openSearchHandler}
                    isSearchOpen={isOpen}
                />
                {!isOpen && <Select {...selectData} />}
            </div>
            {!isOpen && (
                <div className={classes.controlsViewMode}>
                    <Button
                        size={ButtonSize.control}
                        type={viewCardMode === BookCardMode.grid ? ButtonType.control : ButtonType.controlActive}
                        onClick={onClickHandlerGrid}
                        data-test-id='button-menu-view-window'
                    >
                        <img
                            src={viewCardMode === BookCardMode.grid ? buttonIconsActive : buttonIcons}
                            alt='icons style'
                        />
                    </Button>
                    <Button
                        size={ButtonSize.control}
                        type={viewCardMode === BookCardMode.grid ? ButtonType.controlActive : ButtonType.control}
                        onClick={onClickHandlerList}
                        data-test-id='button-menu-view-list'
                    >
                        <img
                            src={viewCardMode === BookCardMode.grid ? buttonLists : buttonListsActive}
                            alt='lists style'
                        />
                    </Button>
                </div>
            )}
        </div>
    );
};
