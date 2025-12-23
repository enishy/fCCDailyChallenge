function emailChainCount(subject) {
    const total = subject.match(/Re:|Fwd:|fw:/gi);
    return total ? total.length : 0
}

emailChainCount("Re: Meeting Notes")
emailChainCount("Meeting Notes")
emailChainCount("Re: re: RE: rE: Meeting Notes")
emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")
emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary")