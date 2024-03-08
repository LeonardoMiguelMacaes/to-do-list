class SelectorConverter {
    static Priority: { id:number, value:string }[] = [{id: 1, value: 'High'}, {id: 2, value: 'Medium'}, {id: 3, value: 'Low'}]

    public convertIdToString(searchedId: number, group: {id: number, value: string}[]) {
        for (const element of group) {
            if(element.id == searchedId) {
                return element.value
            }
        }
        
        return ''
    }
    
    public convertStringToId(searchedString: string, group: {id: number, value: string}[]) {
        for (const element of group) {
            if(element.value == searchedString) {
                return element.id
            }
        }
        
        return -1
    }
} export default SelectorConverter