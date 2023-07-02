const _ = document;

const subHeading = _.querySelector(".sub-heading");
const heading = _.querySelector(".main-heading");

const subHeadingTypewriter = new Typewriter(subHeading);
const headingTypewriter = new Typewriter(heading);

headingTypewriter
	.typeString("خوش آمدید")
	.start()
	.callFunction(({ elements }) => {
		elements.cursor.style.display = "none";
		subHeadingTypewriter
			.typeString("غذاهای ما را امتحان کنید")
			.start()
			.callFunction(({ elements }) => {
				elements.cursor.style.display = "none";
			});
	});
