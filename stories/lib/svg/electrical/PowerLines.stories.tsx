import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PowerLines, PowerLinesPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/PowerLines",
  component: PowerLines,
} as ComponentMeta<typeof PowerLines>;

const Template: ComponentStory<typeof PowerLines> = (
  args: PowerLinesPropsI
) => (
  <Box display="flex" gap="20px">
    <PowerLines {...args} />
    <PowerLines {...args} fill="red.500" />
    <PowerLines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
