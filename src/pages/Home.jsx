import { Box, Button, Container, Flex, Image, Input ,SimpleGrid,Spacer,Text} from "@chakra-ui/react"
import ImgDes from "../componant/ImgDes"
import OntheMenu from "../componant/OntheMenu"
import homeTop from "../img/homeTop.png"



const Home = ()=>{

    

    

    return (
        <Box textAlign="center" width={"100%"} >
{/* first */}
        <Box  width={"100%"} >
        <Image w="100%" height="100%" src={homeTop} alt="home"></Image>
        </Box>
        {/* second */}

        <Box bgColor={"#fef9eb"} >
        <Text fontSize={["2xl","3xl","5xl"]} fontWeight="semibold" textAlign="center" >How it Works</Text>  
            <ImgDes/>     
        </Box>
        <OntheMenu/>  

        <Image m="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="image" ></Image>
        <Text fontSize={["md","lg","2xl","6xl"]} textAlign="center" fontWeight="bold" >Flexible plans that fit your life</Text>
        <Text textAlign="center" m="auto" w="60%" >We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause or change your plan at any time.</Text>

 {/* third */}
        <SimpleGrid w="85%" margin="auto" mt="20px"   columns={[1,2,2,2,5]} spacing='3%'  justify="space-around"   >
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">4-5 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">6-7 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">8-9 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">10-11 Meals</Text>
            </Box>
            <Box marginBottom={["230px","80px","30px","30px"]} textAlign="center" >
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold" >12 Meals</Text>
            </Box>
        </SimpleGrid>

        <Text textAlign="center" >Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
        <Button size="lg" bgColor="#3167ff" >Sign Up Now</Button>

        





        {/* last */}
        </Box>
    )

       
   
}

export default Home