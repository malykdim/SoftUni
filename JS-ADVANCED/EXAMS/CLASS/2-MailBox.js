class MailBox {
    constructor(mailBox) {
        this.mailBox = [];
    }
    
    addMessage(subject, text) {
        this.mailBox.push({subject, text});
        return this;
    }
    
    get messageCount() {
        return this.mailBox.length;
    }
    
    deleteAllMessages() {
        this.mailBox = [];
    }
    
    findBySubject(substr) {
        let result = [];
        for (let msg of this.mailBox) {
            if (msg.subject.includes(substr)) {
                result.push(msg);
            }
        }
        return result;
    }
    
    toString() {
        if (this.mailBox.length <= 0) {
            return `* (empty mailbox)`;
        } 
        let result = [];
        for (const msg of this.mailBox) {
            result.push(`* [${msg.subject} ${msg.text}`); 
            return result.join('\n');           
        }
    }
}