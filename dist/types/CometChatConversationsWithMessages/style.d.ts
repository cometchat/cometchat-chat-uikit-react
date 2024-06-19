import { CometChatTheme } from "@cometchat/uikit-resources";
import { ConversationsConfiguration, MessageHeaderStyle, MessagesConfiguration, MessagesStyle, WithMessagesStyle } from "@cometchat/uikit-shared";
import { CSSProperties } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { LabelStyle } from "@cometchat/uikit-elements";
export declare const getConversationsWrapperStyles: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, theme: CometChatTheme) => CSSProperties;
export declare const getWithMessagesSidebarStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, theme: CometChatTheme, isMobileView: boolean | undefined, activeUser: CometChat.User | null, activeGroup: CometChat.Group | null) => CSSProperties;
export declare const getWithMessagesMainStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, isMobileView: boolean | undefined, activeUser: CometChat.User | null, activeGroup: CometChat.Group | null) => CSSProperties;
export declare const getLabelStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, theme: CometChatTheme) => LabelStyle;
export declare const getConversationsStyle: (conversationsConfiguration: ConversationsConfiguration | undefined) => {
    titleTextFont?: string | undefined;
    titleTextColor?: string | undefined;
    emptyStateTextFont?: string | undefined;
    emptyStateTextColor?: string | undefined;
    errorStateTextFont?: string | undefined;
    errorStateTextColor?: string | undefined;
    loadingIconTint?: string | undefined;
    onlineStatusColor?: string | undefined;
    separatorColor?: string | undefined;
    boxShadow?: string | undefined;
    privateGroupIconBackground?: string | undefined;
    passwordGroupIconBackground?: string | undefined;
    lastMessageTextColor?: string | undefined;
    lastMessageTextFont?: string | undefined;
    typingIndictorTextColor?: string | undefined;
    typingIndictorTextFont?: string | undefined;
    threadIndicatorTextFont?: string | undefined;
    threadIndicatorTextColor?: string | undefined;
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    background: string;
};
export declare const getMessageHeaderStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, messagesConfiguration: MessagesConfiguration | undefined, isMobileView: boolean | undefined) => MessageHeaderStyle;
export declare const getMessageComposerStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, messagesConfiguration: MessagesConfiguration | undefined, isMobileView: boolean | undefined) => {
    attachIcontint?: string | undefined;
    sendIconTint?: string | undefined;
    emojiIconTint?: string | undefined;
    AIIconTint?: string | undefined;
    voiceRecordingIconTint?: string | undefined;
    inputBackground?: string | undefined;
    inputBorder?: string | undefined;
    inputBorderRadius?: string | undefined;
    dividerTint?: string | undefined;
    textFont?: string | undefined;
    textColor?: string | undefined;
    placeHolderTextColor?: string | undefined;
    placeHolderTextFont?: string | undefined;
    emojiKeyboardTextFont?: string | undefined;
    emojiKeyboardTextColor?: string | undefined;
    previewTitleFont?: string | undefined;
    previewTitleColor?: string | undefined;
    previewSubtitleColor?: string | undefined;
    previewSubtitleFont?: string | undefined;
    closePreviewTint?: string | undefined;
    maxInputHeight?: string | undefined;
    height?: string | undefined;
    width?: string | undefined;
    border?: string | undefined;
    borderRadius: string;
    background?: string | undefined;
};
export declare const getMessagesStyle: (messagesStyle?: MessagesStyle, conversationsWithMessagesStyle?: WithMessagesStyle | undefined) => {
    height?: string | undefined;
    width?: string | undefined;
    border?: string | undefined;
    borderRadius?: string | undefined;
    background: string | undefined;
};
export declare const getEmptyMessageLayoutStyle: (isMobileView: boolean | undefined, activeUser: CometChat.User | null, activeGroup: CometChat.Group | null) => CSSProperties;
export declare const getBackdropStyle: (conversationsWithMessagesStyle: WithMessagesStyle | undefined, conversationsConfiguration: ConversationsConfiguration | undefined) => {
    height: string | undefined;
    width: string | undefined;
    background: string;
    border: string;
    borderRadius: string;
};
export declare const getButtonStyle: (showCometChatContacts: boolean, theme: CometChatTheme) => {
    height: string;
    width: string;
    border: string;
    borderRadius: string;
    background: string;
    buttonIconTint: string | undefined;
};
