import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Transformer, TransformerPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Transformer",
  component: Transformer,
} as ComponentMeta<typeof Transformer>;

const Template: ComponentStory<typeof Transformer> = (
  args: TransformerPropsI
) => (
  <Box display="flex" gap="20px">
    <Transformer {...args} />
    <Transformer {...args} fill="red.500" />
    <Transformer {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
