import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Swatchbook, SwatchbookPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Swatchbook",
  component: Swatchbook,
} as ComponentMeta<typeof Swatchbook>;

const Template: ComponentStory<typeof Swatchbook> = (
  args: SwatchbookPropsI
) => (
  <x.div display="flex" gap="20px">
    <Swatchbook {...args} />
    <Swatchbook {...args} fill="red.500" />
    <Swatchbook {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
