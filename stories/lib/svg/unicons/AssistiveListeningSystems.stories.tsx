import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  AssistiveListeningSystems,
  AssistiveListeningSystemsPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AssistiveListeningSystems",
  component: AssistiveListeningSystems,
} as ComponentMeta<typeof AssistiveListeningSystems>;

const Template: ComponentStory<typeof AssistiveListeningSystems> = (
  args: AssistiveListeningSystemsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AssistiveListeningSystems {...args} />
    <AssistiveListeningSystems {...args} fill="red.500" />
    <AssistiveListeningSystems {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
