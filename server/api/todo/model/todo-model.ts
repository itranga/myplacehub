import * as mongoose from 'mongoose';

const _todoSchema = {
    name: {type: String, required: true, trim: true},
    url: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_todoSchema);
