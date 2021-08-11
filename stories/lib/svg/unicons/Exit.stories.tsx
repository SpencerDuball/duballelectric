import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Exit, ExitPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Exit",
  component: Exit,
} as ComponentMeta<typeof Exit>;

const Template: ComponentStory<typeof Exit> = (args: ExitPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Exit {...args} />
    <Exit {...args} fill="red.500" />
    <Exit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
