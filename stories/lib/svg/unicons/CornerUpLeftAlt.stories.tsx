import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerUpLeftAlt, CornerUpLeftAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerUpLeftAlt",
  component: CornerUpLeftAlt,
} as ComponentMeta<typeof CornerUpLeftAlt>;

const Template: ComponentStory<typeof CornerUpLeftAlt> = (
  args: CornerUpLeftAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerUpLeftAlt {...args} />
    <CornerUpLeftAlt {...args} fill="red.500" />
    <CornerUpLeftAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
