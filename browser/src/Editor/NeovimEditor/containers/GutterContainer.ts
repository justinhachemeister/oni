import { connect } from "react-redux"

import { Gutter, IErrorsProps } from "./../../../UI/components/Gutter"

import * as Selectors from "./../NeovimEditorSelectors"
import * as State from "./../NeovimEditorStore"

const mapStateToProps = (state: State.IState): IErrorsProps => {

    const window = Selectors.getActiveWindow(state)
    const errors = Selectors.getErrorsForActiveFile(state)

    const noop = (): any => null

    return {
        errors,
        cursorLine: window ? window.line : 0,
        fontWidthInPixels: state.fontPixelWidth,
        fontHeightInPixels: state.fontPixelHeight,
        bufferToScreen: window ? window.bufferToScreen : noop,
        screenToPixel: window ? window.screenToPixel : noop,
    }
}

export const GutterContainer = connect(mapStateToProps)(Gutter)