import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WhatsappAlt, WhatsappAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WhatsappAlt",
  component: WhatsappAlt,
} as ComponentMeta<typeof WhatsappAlt>;

const Template: ComponentStory<typeof WhatsappAlt> = (
  args: WhatsappAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <WhatsappAlt {...args} />
    <WhatsappAlt {...args} fill="red.500" />
    <WhatsappAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
