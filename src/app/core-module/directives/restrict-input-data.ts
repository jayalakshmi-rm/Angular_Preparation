/*******************************************************************************
 * Copyright (c) 2017 Anthem. All rights reserved.
 * PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 ******************************************************************************/
import { Directive, Input, HostListener } from '@angular/core';

/**
 * This directive restrict  the input keying based on the regular expression.
 */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[v-restrict-input]',
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        '(keypress)': 'onKeyPress($event)',
        '(paste)': 'onPaste($event)'
    }
})

export class RestrictInputDataDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('v-restrict-input') public regExpression: string;

    /**
     * check if the input key char match with passed regular expression.If it match,allow else restrict.
     * @Param event
     * return boolean
     */
    onKeyPress(e) {
        const regExp = new RegExp(this.regExpression);
        const keyCode = (e.keyCode) ? e.keyCode : e.which; // firefox supports which to get the ascii code
        // Firefox doesn't allow special keys mentioned below .So adding a check for firefox.
        const allowedSpecialKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Backspace', 'Home', 'End'];
        const input = String.fromCharCode(keyCode);
        if (allowedSpecialKeys.indexOf(e.key) > -1) {
            return true;
        } else if (regExp.test(input)) { // check if the input key match with regular expression
            return true;
        } else {
            return false;
        }
    }

    onPaste(e) {
        const data = e.clipboardData.getData('Text');
        const regExp = new RegExp(this.regExpression);
        if (regExp.test(data)) { // check if the input key match with regular expression
            return true;
        } else {
            return false;
        }
    }
}
