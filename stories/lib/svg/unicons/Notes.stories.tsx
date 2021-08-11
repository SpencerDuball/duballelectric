import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Notes, NotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Notes",
  component: Notes,
} as ComponentMeta<typeof Notes>;

const Template: ComponentStory<typeof Notes> = (args: NotesPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Notes {...args} />
    <Notes {...args} fill="red.500" />
    <Notes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
