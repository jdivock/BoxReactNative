/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView,
    Text,
    Animation,
    View,
} = React;

var BoxHackathon = React.createClass({
    getInitialState: function(){
        return {
            selStyle: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
    },
    render: function() {
        return (
            <View>
                <View
            style={styles.header}
                >
                <Image style={styles.logo} source={{uri: "http://i.imgur.com/QmOnf8h.png"}}/>
                </View>
                <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            style={styles.listView}
                />
                </View>
        );
    },
    componentDidMount: function(){
        this.fetchData();
    },
    fetchData: function(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(SAMPLE_BOX_DATA),
            loaded: true
        });
    },
    renderRow: function(entry){
        return (
                <BoxRow entry={entry}/>
        );
   }
});

var BoxRow = React.createClass({
    getInitialState: function(){
        return {
            selStyle: null
        };
    },
    setSelected: function(e){
            console.log('refs', this.refs);
        if(this.state.selStyle){
           // Animation.startAnimation(this.refs['this'], 300, 0,
            //                         'easeInOutQuad', {left: -30});
             this.setState({
                 selStyle: null
             }   );
        } else {

            //Animation.startAnimation(this.refs['this'], 300, 0,
             //                        'easeInOutQuad', {left: 0});
         this.setState({
             selStyle: styles.selected
         });
        }
    },
    render: function(){
      var rowStyles = [];
        if(this.state.selStyle){
            rowStyles.push(this.state.selStyle);
        }

        rowStyles.push(styles.container);

        return (
                <TouchableOpacity onPress={this.setSelected}>
                <View style={[styles.container, this.state.selStyle]}>
                <Image
            source={{uri:this.props.entry.icon}}
            style={styles[this.props.entry.style]}/>
                <View style={styles.rightContainer}>
                <Text style={styles.title}>{this.props.entry.title}</Text>
                <Text style={styles.size}>{this.props.entry.size} {this.props.entry.date}</Text>
                </View>
                </View>
                </TouchableOpacity>
        );

    }
});

var styles = StyleSheet.create({
    selected: {
        left: -40
    },
    container: {
        flex: 1,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 3,
        height: 75
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#1a74ba'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8
    },
    year: {
        textAlign: 'center'
    },
    rightContainer: {
        flex: 1
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        width: 60,
        height: 40
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
    folder: {
        width: 40,
        height: 40,
        marginRight: 5
    },
    file: {
        width: 32,
        height: 32,
        marginRight: 5
    },
    thumbnail: {
        width: 65,
        height: 65,
        marginRight: 5
    }
});

AppRegistry.registerComponent('BoxHackathon', () => BoxHackathon);
var SAMPLE_BOX_DATA = [
    {
        icon: "https://m.box.com/images/icon-folder.png",
        style: "folder",
        title: "Jay's folder",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "I'm a file",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's other file",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/file-types/160-aac.png",
    style: "file",
        title: "Jay's web link",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },{
        icon: "https://m.box.com/images/file-types/160-aac.png",
    style: "file",
        title: "Jay's web link",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/file-types/160-aac.png",
    style: "file",
        title: "Jay's web link",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },

{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-file.png",
        style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-folder.png",
        style: "folder",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-folder.png",
        style: "folder",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },
{
        icon: "https://m.box.com/images/icon-web_link.png",
    style: "file",
        title: "Jay's File",
        size: "5.2GB",
        date: "10/12/14 3:34PM"
    },


];


