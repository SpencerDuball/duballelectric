import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PlusSquare, PlusSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlusSquare",
  component: PlusSquare,
} as ComponentMeta<typeof PlusSquare>;

const Template: ComponentStory<typeof PlusSquare> = (
  args: PlusSquarePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PlusSquare {...args} />
    <PlusSquare {...args} fill="red.500" />
    <PlusSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
