import mongoose, { Schema, Document } from 'mongoose';

const noteSchema = new Schema({
    title: { type: String, required: true },
    note: { type: String, required: true },
});

export interface Note {
    title: string;
    note: string;
}

export default mongoose.model<Note>('Note', noteSchema);

