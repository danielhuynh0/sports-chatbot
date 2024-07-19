from fastapi import FastAPI, HTTPException, Body
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    id: int
    message: str

@app.post("/send-message")
def send_message(chat_message: Message):
    return {"response": "Chatbot response for message: " + chat_message.message}