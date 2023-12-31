import { PasteCustomCSS } from '@twilio-paste/customization';

export const pasteElementHook = {
  C_AND_V_BUTTON_BOX: {
    paddingLeft: 'space40',
    paddingRight: 'space40',
    paddingTop: 'space40',
  },
  C_AND_V_CONTENT_BOX: {
    paddingBottom: 'space40',
  },
  C_AND_V_CONTENT_HEADING: {
    marginBottom: 'space0',
  },
  C_AND_V_ICON: {
    width: '100%',
    height: '100%',
    minWidth: 'sizeSquare90',
    padding: 'space20',
  },
} as { [key: string]: PasteCustomCSS };
