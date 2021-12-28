class Notice {
    constructor(args = {}) {
        const {
            right,
            duration
        } = args;
        this.right = right;
        this.duration = duration
    }

    createNoticeBox() {
        const box = document.createElement('div');
        box.setAttribute('class', 'notice-box');
        return box;
    }

    createNotice(config = {}) {
        const {
            title,
            content,
            confirmLabel,
            cancelLabel
        } = config;
        const noticeChildStr = `
                <div class="notice-title">
                    <div class="notice-title__title">
                        ${title}
                    </div>
                    <div class="notice-title__close"></div>
                </div>
                <div class="notice-content">${content}</div>
                <div class="notice-footer">
                    <div class="notice-footer__cancel">${cancelLabel}</div>
                    <div class="notice-footer__confirm">${confirmLabel}</div>
                </div>
        `
        const notice = document.createElement('div');
        notice.setAttribute('class', 'notice');
        notice.innerHTML = noticeChildStr;
        return notice;
    }

    open(config) {
        const notice = this.createNotice(config);
        let noticeBox = document.querySelector('.notice-box');
        console.log('noticeBox', noticeBox)
        if (!noticeBox) {
            const box = this.createNoticeBox();
            noticeBox = document.body.appendChild(box)
            console.log('noticeBox2', noticeBox);
        }
        noticeBox.appendChild(notice);
    }

    close() {}

    onConfirm() {}

    onCancel() {}
}