let joke = [
    `121. What do you call two witches living together?
Broommates.`,
    `122. What happens when a vampire goes in the snow?
Frost bite.`,
    `123. Why did the zombie skip school?
He was feeling rotten.`,
    `124. What is a vampire’s favorite fruit?
A blood orange.`,
    `125. What instrument does a skeleton play?
The trom-bone.`,
    `126. Where do baby ghosts go during the day?
Day-scare centers.`,
    `127. Why didn’t the skeleton go to the dance?
Because he had no body to go with.`,
    `128. What candy do you eat on the playground?
Recess pieces.`,
    `129. How do ghosts wash their hair?
With sham-boo.`,
    `130. What’s a witch’s favorite subject in school?
Spelling.`,
    `131. What’s big, scary and has three wheels?
A monster on a tricycle.`,
    `132. Why don’t vampires have more friends?
Because they are a pain in the neck.`,
    `133. What position does a ghost play in hockey?
Ghoulie`,
    `134. What do you call a witch who goes to the beach?
A sand-witch.`,
    `135. What do you give a vampire when he’s sick?
Coffin drops.`,
    `136. What kinds of pants do ghosts wear?
Boo-jeans.`,
    `  137. Who isn't hungry at Thanksgiving?
The turkey—he’s already stuffed.`,
    `138. Can a turkey jump higher than Mount Everest?
Yes, because a building can’t jump at all.`,
    `139. Which side of the turkey has the most feathers?
The outside.`,
    `140. What always comes at the end of Thanksgiving?
The letter g.`,
    `141. What’s the key to a great Thanksgiving dinner?
The tur-key.`,
    `142. Where does Christmas come before Thanksgiving?
In the dictionary.`,
    `143. Why did pilgrims’ pants always fall down?
Because they wore their belt buckle on their hat.`,
    `144. What do turkeys and teddy bears have in common?
They both have stuffing.`,
    `145. What key won't open any door?
A turkey.`,
    `146. Why did the turkey cross the road?
It was the chicken's day off.`,
    `147. Why did the chewing gum cross the road?
It was stuck on the turkey's foot.`,
    `148. Why did the turkey cross the road twice?
To show he wasn't a chicken.`,
    `149. What do you get when a turkey lays an egg on top of a barn?
An eggroll.`,
    `150. Why was the turkey the drummer in the band?
Because he had drumsticks.`,
    `151. What’s the best thing to put into pumpkin pie?
Your teeth.`,
    `152. What’s the best dance to do on Thanksgiving?
The turkey trot.`,
    `153. Why did the Pilgrims sail from England to America?
Because they missed their plane.`,
    `154. When the Pilgrims landed, where did they stand?
On their feet.`,
    `155. Why did the police arrest the turkey?
They suspected it of fowl play.`,
    `156. What should you wear to Thanksgiving dinner?
A har-vest.`,
    `157. If the Pilgrims were alive today, what would they be most famous for?
Their age.`,
    `158. Where do you find a turkey with no legs?
Where you left it.`,
    `159. What do you call it when it rains turkeys?
Foul weather.`,
    `160. Why did the turkey sit on the tomahawk?
To hatch-et.`,
    `161. What kind of music did Pilgrims listen to?
Plymouth Rock.`,
    `162. What smells the best at a Thanksgiving dinner?
Your nose.`,
    `163. Why do turkeys always say, “gobble, gobble”?
Because they never learned good table manners.`,

    `165. How does a snowman lose weight?
He waits for the weather to get warmer.`,
    `166. What did one snowman say to the other snowman?
Do you smell carrots?`,
    `167. What do you call a reindeer with bad manners?
Rude-olph.`,
    `168. Why does Santa work at the North Pole?
Because the penguins kicked him out of the South Pole.`,
    `169. What falls at the North Pole and never gets hurt?
Snow.`,
    `170. How does a sheep say Merry Christmas?
Fleece Navidad.`,
    `171. Why did the Christmas tree go to the barber?
It needed to be trimmed.`,
    `172. What is an elf’s favorite kind of music?
Wrap music.`,
    `173. What kind of photos do elves take?
Elfies.`,
    `174. What do road crews use at the North Pole?
Snow cones.`,
    `175. Why did Rudolph get a bad grade on his report card?
Because he went down in history.`,
    `176. What wears a red suit and goes, “Oh, oh, oh”?
Santa walking backwards.`,
    `177. Where does a snowman keep his money?
In a snow bank.`,
    `178. What do you get when you combine a Christmas tree with a computer?
A pine-apple.`,
    `179. In what year does New Year’s Day come before Christmas?
Every year.`,
    `180. What do snowmen eat for breakfast?
Frosted Flakes.`,
    `181. What kind of motorcycle does Santa like to ride?
A Holly Davidson.`,
    `182. Why are Christmas trees bad at sewing?
Because they always drop their needles.`,
    `183. What do you get when Santa becomes a detective?
Santa clues.`,
    `185. How did the soggy Easter Bunny dry himself?
With a hare dryer.`,
    `186. How does the Easter bunny stay in shape?
Lots of eggs-ercise.`,
    `187. Why can’t a rabbit’s nose be 12 inches long?
Because then it would be a foot.`,
    `188. How can you tell which rabbits are the oldest in a group?
Just look for the gray hares.`,
    `189. What do you call a bunny who isn’t smart?
A hare brain.`,
    `190. What’s the best way to catch a unique rabbit?
Unique up on him.`,
    `191. What happened when the Easter Bunny met the rabbit of his dreams?
They lived hoppily ever after.`,
    `192. What do you call a line of rabbits walking backwards?
A receding hareline.`,
    `193. Why shouldn’t you tell an Easter egg a good joke?
It might crack up.`,
    `194. What did one colored egg say to the other?
Heard any good yolks lately?`,
    `195. What do you call a rabbit who tells jokes?
A  bunny.`,
    `196. What is a rabbit’s favorite dance?
The Bunny Hop.`,
    `197. What kind of jewelry do rabbits wear?
14 carrot gold.`,
    `198. How many chocolate bunnies can you put into an empty Easter basket?
Only one because after that, it’s not empty.`,
    `199. What do you call a rabbit with fleas?
Bugs Bunny.`,
    `200. Why did the Easter egg hide?
He was a little chicken.`,
];
let number = Math.floor(Math.random() * (joke.length - 1));
let a = document.getElementById("Thisisjoke");
console.log(number)
a.innerHTML = joke[number];


