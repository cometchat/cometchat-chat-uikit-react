import { CometChatTheme, TabsVisibility } from "@cometchat/uikit-resources";
import { ContactsStyle, TabItemStyle } from "@cometchat/uikit-shared";
import { CSSProperties } from "react";
import { TabsStyle } from "../Shared/Views/CometChatTabs/TabsStyle";
type ButtonStyle = CSSProperties & {
    buttonIconTint?: string;
};
type HeaderStyle = CSSProperties;
type WrapperStyle = CSSProperties;
type ContentStyle = CSSProperties;
export declare function closeBtnStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle): ButtonStyle;
export declare function submitBtnWrapperStyle(): CSSProperties;
export declare function submitBtnStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle | null): any;
export declare function contactsHeaderStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle): HeaderStyle;
export declare function contactsWrapperStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle): WrapperStyle;
export declare function getContactsStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle): CSSProperties;
export declare function contactsContentStyle(): ContentStyle;
export declare function getTabsStyle(theme: CometChatTheme, contactsStyle?: ContactsStyle): TabsStyle;
export declare const getTabItemStyling: (theme: CometChatTheme, tabVisibility: TabsVisibility | undefined, isActive: boolean, contactsStyle?: ContactsStyle) => TabItemStyle;
export {};
