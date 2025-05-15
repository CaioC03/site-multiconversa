import React, { useEffect, useRef, useState } from "react"
import { Card } from "../card";
import { Input } from "../input";
import moment from "moment";
import { Image } from "../image";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import { ContactsIcon } from "../../assets/ContactsIcon";
import { FileIcon } from "../../assets/FileIcon";
import { Button } from "../button";
import { IInputProps } from "../input/Input";
import { SendIcon } from "../../assets/SendIcon";
import axios from "axios";

export interface MessagesProps {
  from: "SENDER" | "RECEIVER";
  text?: string;
  timestamp?: Date;
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  document?: {
    url: string;
    name: string;
  };
  stickerUrl?: string;
  contact?: {
    name: string;
    phone: string;
  };
  [x:string]: any;
}

interface IProps {
  messages: MessagesProps[],
  messageComponent?: React.JSXElementConstructor<{ message: MessagesProps }>;
  onSendMessage: (message: string) => void;
  inputProps: IInputProps;
  [x:string]: any;
}

export function Chat({ messages, messageComponent, onSendMessage, inputProps, ...others }: IProps) {
  const [inputValue, setInputValue] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const inputOnKeyDown = (e: any) => {
    if (e.key === "Enter" && inputValue !== "") {
      onSendMessage(inputValue)
      setInputValue("")
    }
  }

  useEffect(() => {
    if (scrollRef) {
      scrollRef?.current?.scrollTo({ top: scrollRef?.current.scrollHeight, behavior: "smooth" })
    }
  }, [messages])

  async function download(filename: any, href: any) {
    axios.get(href, { responseType:"blob" })
      .then(function (response) {
        const reader = new window.FileReader();
        reader.readAsDataURL(response.data); 
        reader.onload = function() {
          const base64 = reader.result;
          
          if (typeof base64 === "string") {
            const element = document.createElement('a');

            element.setAttribute('href', base64);
            element.setAttribute('download', filename);
          
            element.style.display = 'none';
            document.body.appendChild(element);
          
            element.click();
          
            document.body.removeChild(element);
          }
        }
      }
    );
  }
   
  return (
    <Card>
      <div className="bg-white flex flex-col h-full" {...others}>
        <div ref={scrollRef} className="flex flex-col w-full h-full gap-3 overflow-y-auto px-4">
          {messages.map((message) => {
            if (messageComponent) {
              const MessageComponent = messageComponent

              return <MessageComponent message={message} />
            } else {
              return (
                <div className={`flex w-full create-message ${message.from === "SENDER" ? "justify-start" : "justify-end"}`}>
                  <div className={`text-black py-2 px-3 rounded-md ${message.from === "SENDER" ? "bg-grey" : "bg-primary/20"}`}>
                    <div className="flex flex-col gap-2 max-w-xl">
                      {message.imageUrl && (
                        <Image 
                          src={message.imageUrl}
                          width={"100%"}
                          height={"100%"}
                          style={{
                            borderRadius: "5px"
                          }}
                        />
                      )}

                      {message.stickerUrl && (
                        <Image 
                          src={message.stickerUrl}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "200px",
                            backgroundSize: 'contain',
                          }}
                        />
                      )}
                      
                      {message.videoUrl && (
                        <div className='react-player'>
                          <ReactPlayer
                            url={message.videoUrl}
                            width={"100%"}
                            height={"100%"}
                            controls
                          />
                        </div>
                      )}

                      {message.contact && (
                        <div className='flex gap-3 w-60 mb-1'>
                          <div className="flex">
                            <ContactsIcon size={48} />
                          </div>

                          <div>
                            <p>{message.contact.name}</p>
                            <p>{message.contact.phone}</p>
                          </div>
                        </div>
                      )}
                      
                      {message.document && (
                        <div className="flex flex-col gap-2 w-60">
                          <div className='flex gap-3'>
                            <div className="flex">
                              <FileIcon size={48} />
                            </div>

                            <div>
                              <p>{message.document.name}</p>
                            </div>
                          </div>

                          <Button
                            variant="outlined" 
                            label="Baixar" 
                            className="w-full text-center"
                            as={"button"}
                            onClick={() => download(message.document?.name, message.document?.url)}
                          />
                        </div>
                      )}

                      {message.audioUrl && (
                        <ReactAudioPlayer
                          src={message.audioUrl}
                          controls
                        />
                      )}

                      {message.text && <p className="break-words" dangerouslySetInnerHTML={{ __html: message.text }} />}
                    </div>
                    
                    {message.timestamp && <div className="text-xs text-black/50 text-end">{moment(message.timestamp).fromNow()}</div>}
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className="mt-3 flex gap-3">
          <Input 
            onKeyDown={inputOnKeyDown}
            value={inputValue}
            setValue={setInputValue}
            {...inputProps}
          />
          <div 
            className="bg-primary p-3 rounded-full cursor-pointer shadow-md hover:opacity-75 flex justify-center items-center w-14" 
            onClick={() => {
              if (inputValue !== "") {
                onSendMessage(inputValue)
                setInputValue("")
              }
            }}
          >
            <SendIcon />
          </div>
        </div>
      </div>
    </Card>
  )
}