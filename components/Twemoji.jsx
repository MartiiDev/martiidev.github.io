import React, { memo } from "react"
import Image from "next/image"

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component")
}

const Twemoji = ({ size = 15, emoji = isRequired() }) => {
  let img;
  if (/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(emoji)) {
    img = emoji.codePointAt(0).toString(16)

  } else {
    const risl = (char) => {
      return String.fromCodePoint(0x1F1E6 - 65 + char.toUpperCase().charCodeAt(0));
    }
    img = risl(emoji[0]).codePointAt(0).toString(16) + "-" + risl(emoji[1]).codePointAt(0).toString(16);
  }

  return (
    <Image
      src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
      height={size}
      width={size}
      alt={emoji}
    />
  )
}

export default memo(Twemoji)