import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Mastercard, MastercardPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/Mastercard",
  component: Mastercard,
} as ComponentMeta<typeof Mastercard>;

const Template: ComponentStory<typeof Mastercard> = (
  args: MastercardPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Mastercard {...args} />
    <Mastercard
      {...args}
      colorPalette={["blue.500", "red.500", "green.500", "yellow.500"]}
    />
    <Mastercard {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px" };
