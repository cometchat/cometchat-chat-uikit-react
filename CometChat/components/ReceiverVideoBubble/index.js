import React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import { checkMessageForExtensionsData } from "../../util/common";
import { SvgAvatar } from '../../util/svgavatar';

import Avatar from "../Avatar";
import ToolTip from "../ToolTip";
import ReplyCount from "../ReplyCount";
import RegularReactionView from "../RegularReactionView";

import {
  messageContainerStyle,
  messageWrapperStyle,
  messageThumbnailStyle,
  messageDetailStyle,
  nameWrapperStyle,
  nameStyle,
  messageVideoContainerStyle,
  messageVideoWrapperStyle,
  messageInfoWrapperStyle,
  messageTimestampStyle,
  messageActionWrapperStyle,
  messageReactionsWrapperStyle
} from "./style";

class ReceiverVideoBubble extends React.Component {

  messageFrom = "receiver";

  constructor(props) {
    super(props);

    const message = Object.assign({}, props.message, { messageFrom: this.messageFrom });
    if (message.receiverType === 'group') {

      if (!message.sender.avatar) {

        const uid = message.sender.getUid();
        const char = message.sender.getName().charAt(0).toUpperCase();

        message.sender.setAvatar(SvgAvatar.getAvatar(uid, char));
      }
    }

    this.state = {
      message: message
    }
  }

  componentDidUpdate(prevProps) {

    const previousMessageStr = JSON.stringify(prevProps.message);
    const currentMessageStr = JSON.stringify(this.props.message);

    if (previousMessageStr !== currentMessageStr) {

      const message = Object.assign({}, this.props.message, { messageFrom: this.messageFrom });
      this.setState({ message: message })
    }
  }

  render() {

    let avatar = null, name = null;
    if (this.props.message.receiverType === 'group') {

      if (!this.props.message.sender.avatar) {

        const uid = this.props.message.sender.getUid();
        const char = this.props.message.sender.getName().charAt(0).toUpperCase();

        this.props.message.sender.setAvatar(SvgAvatar.getAvatar(uid, char));
      }

      avatar = (
        <div css={messageThumbnailStyle()} className="message__thumbnail">
          <Avatar
            cornerRadius="50%"
            borderColor={this.props.theme.color.secondary}
            borderWidth="1px"
            image={this.props.message.sender.avatar} />
        </div>
      );

      name = (<div css={nameWrapperStyle(avatar)} className="message__name__wrapper"><span css={nameStyle(this.props)} className="message__name">{this.props.message.sender.name}</span></div>);
    }

    let messageReactions = null;
    const reactionsData = checkMessageForExtensionsData(this.state.message, "reactions");
    if (reactionsData) {

      if (Object.keys(reactionsData).length) {
        messageReactions = (
          <div css={messageReactionsWrapperStyle()} className="message__reaction__wrapper">
            <RegularReactionView
            theme={this.props.theme}
            message={this.state.message}
            reaction={reactionsData}
            loggedInUser={this.props.loggedInUser}
            widgetsettings={this.props.widgetsettings}
            actionGenerated={this.props.actionGenerated} />
          </div>
        );
      }
    }

    return (
      <div css={messageContainerStyle()} className="receiver__message__container message__video">
        
        <div css={messageWrapperStyle()} className="message__wrapper">
          {avatar}
          <div css={messageDetailStyle(name)} className="message__details">
            {name}

            <div css={messageActionWrapperStyle()} className="message__action__wrapper">
              <ToolTip {...this.props} message={this.state.message} name={name} />
              <div css={messageVideoContainerStyle()} className="message__video__container">
                <div css={messageVideoWrapperStyle(this.props)} className="message__video__wrapper">
                  <video controls>
                    <source src={this.props.message.data.url} />
                  </video>
                </div>
              </div>
            </div>

            {messageReactions}

            <div css={messageInfoWrapperStyle()} className="message__info__wrapper">
              <span css={messageTimestampStyle(this.props)} className="message__timestamp">{new Date(this.props.message.sentAt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
              <ReplyCount {...this.props} message={this.state.message} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReceiverVideoBubble;