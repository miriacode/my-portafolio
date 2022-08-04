useEffect(() => { 
    const hash = props.history.location.hash 
    // Check if there is a hash and if an element with that id exists 
    const el = hash && document.getElementById(hash.substr(1)) 
    if (el) { el.scrollIntoView({behavior: "smooth"}) } }, [props.history.location.hash]) 
    // Fires every time hash changes