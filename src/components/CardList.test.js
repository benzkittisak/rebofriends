import { shallow , mount , render } from 'enzyme'; 
import CardList from './CardList';

describe('<CardList/>', () => {
    test('expect to render Card component', () => {
        const mockRobots = [
            {
                id:1,
                name:'John Snow',
                username:'JohnJogn',
                email:'john@gmail.com'
            }
        ]
        const wrapper = shallow(<CardList robots={mockRobots}/>)
        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot();
    })
});
