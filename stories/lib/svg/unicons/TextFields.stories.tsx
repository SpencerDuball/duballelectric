import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TextFields, TextFieldsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TextFields",
  component: TextFields,
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = (
  args: TextFieldsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TextFields {...args} />
    <TextFields {...args} fill="red.500" />
    <TextFields {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
